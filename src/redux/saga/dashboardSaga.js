import { call, put } from 'redux-saga/effects';
import { getDashboardData } from '../../apis/dashboard';
import { dashboardFailureResponse, dashboardSuccessResponse } from '../slice/DashboardSlice';

export function* fetchDashboard() {
  try {
    const response = yield call(getDashboardData);
    yield put(dashboardSuccessResponse(response));
  } catch (e) {
    yield put(dashboardFailureResponse());
  }
}