//@ Route pathes
export enum Paths {
    Root = '/',
    Home = '/home',
    NotFound = '*',
    Example = '/example',
    Signup = '/signup',
    Login = '/login',
    Logout = '/logout',
    Account = '/account',
    Settings = '/settings',
    Timetable = '/timetable',
    Payment = '/payment'
  }







































//@ Admin paahts
export enum AdminPaths {
  Panel = '/apanel',
  //? Students
  StudentsList = '/studentslist',
  StudentDetails = '/student/:studentId',
  AddStudent = '/addstudent',
  AddGroup = '/addgroup',
  //? TimeTable
  TimeTable = '/alltimetable',
  AddTimeTable = '/addtimetable',
  //? Teachers
  TeachersList = '/teacherslist',
  TeacherDetails = '/teacher/:teacherId',
  AddTeacher = '/addteacher',
  //? Payments
  AddPayment = '/addpayment'
}