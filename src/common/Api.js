/**
 * List all api using on app
 * @author truongnv
 * @since 2020
 * @version 1.0.0
 */

export const Api = {
  Auth: {
    login: 'auth/login',
    resetPassword: 'auth/send_pass_code',
    update_password: 'users/change_password',
    faceIdFailed: 'auth/get_checkin_code',
    passCode: 'auth/check_pass_code',
  },
  General: {
    list_events: 'common/get_list_events',
    detail_events: 'common/detail_event',
    get_rooms_meeting: 'meeting_rooms/get_all_info',
    get_my_meeting: 'meetings/get_list_meeting_for_employees',
    get_detail_meeting: 'meetings/detail_meeting',
    confirm_meeting: 'meetings/confirm_meeting',
    get_list_company_branchs: 'common/get_list_company_branchs',
    get_list_departments: 'common/get_list_departments',
  },
  Payroll: {
    payrollList: 'employees/get_list_salary_by_year',
  },
  TimeKeeping: {
    timeKeeping: 'employees/get_list_sabbaticals',
    overtime: 'employees/add_overtime',
  },
};
