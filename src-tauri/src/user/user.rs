use sqlx::{Pool, Postgres};
use tauri::State;

pub struct DbPool(pub Pool<Postgres>);

#[derive(Debug, Clone, sqlx::FromRow, serde::Serialize, serde::Deserialize)]
pub struct UserData {
    pub id: i32,
    pub username: String,
    pub email: String,
    pub role: String,
    pub password: String,
    pub group_id: Option<i32>,
    pub group_name: Option<String>,
}

//@ Получение данных пользователя по id
#[tauri::command]
pub async fn fetch_user_data(
    pool: State<'_, DbPool>,
    user_id: i32,
    source: String,
) -> Result<Option<UserData>, String> {
    let query = match source.as_str() {
        "students" => {
            r#"
            SELECT students.id, students.username, students.email, 'student' as role, students.password, groups.id as group_id, groups.name as group_name
            FROM students
            LEFT JOIN groups ON students.group_id = groups.id
            WHERE students.id = $1
            "#
        }
        "teachers" => {
            r#"
            SELECT id, username, email, 'teacher' as role, password, NULL::INTEGER AS group_id, NULL::TEXT AS group_name 
            FROM teachers WHERE id = $1
            "#
        }
        "administrators" => {
            r#"
            SELECT id, username, email, 'administrator' as role, password, NULL::INTEGER AS group_id, NULL::TEXT AS group_name 
            FROM administrators WHERE id = $1
            "#
        }
        _ => return Err("Invalid source".into()),
    };

    let user = sqlx::query_as::<_, UserData>(query)
        .bind(user_id)
        .fetch_optional(&pool.0)
        .await
        .map_err(|e| e.to_string())?;

    Ok(user)
}
