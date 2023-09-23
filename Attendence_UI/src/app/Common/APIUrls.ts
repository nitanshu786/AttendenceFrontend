export class ConstantUrl{
    static readonly Login="AuthenticationAPi/Login";
    static readonly CreateTask="TaskWorkingAPI/Create";
    static readonly DeleteTask="TaskWorkingAPI?guid=";
    static readonly UpdateTask="TaskWorkingAPI/Update";
    static readonly UpdateStage="TaskWorkingAPI/UpdateStage";
    static readonly Register="AuthenticationAPI/Register";
    static readonly GetAllTask="TaskWorkingAPI/GetAllTask";
    static readonly GetTaskByUser="TaskWorkingAPI";
    static readonly GetAttendence="AttendanceApi";
    static readonly GetAttendenceStatus="AttendanceAPI/AttendenceStatus?UserId=";
    static readonly PunchOut="AttendanceAPI/PunchOut?punchOut=";
    static readonly PunchIn="AttendanceAPI/PunchIn?punch=";
    static readonly ReordringTask="TaskWorkingAPI/ReodringItem";
    static readonly GetRegisterUser="UserAPI";
    static readonly GetAllProjects="ProjectAPI";
    static readonly GetTaskById="TaskWorkingAPI/TaskById?taskId=";
    static readonly EmailConfirmation="AuthenticationAPI/confirmation?userid="
}

export class BaseRouting{
    static readonly LoginRoute="login";
    static readonly RegisterRoute="register";
    static readonly TaskRoute="tasks";
    static readonly AttendenceRoute="attendance";
    static readonly HomeRoute="home";
    static readonly LogsRoute="log";
    static readonly SideNavRoute="sidenav";
    static readonly Alltask="taskdrop";
    static readonly DashboardRoute="dashboard";
    static readonly AttendenceCalender="calender";
    static readonly EmailConfirmation="verifyemail";
    static readonly AdminTaskPanel="admintask";
    static readonly LeaveBalnce="Leave";
    static readonly ApplyLeave="applyLeave";

}
export class navigateUrl{
    static readonly Attendence="/dashboard/home/attendance"
    static readonly Register="/register"
    static readonly VerifyEmail='/verifyemail'
    static readonly Task="/dashboard/home/tasks"
    static readonly TaskDilog="/dashboard/home/taskdrop"
    static readonly Login="/login"



}