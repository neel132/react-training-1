import { takeEvery } from "redux-saga/effects";
import { requestDashboard } from "../slice/DashboardSlice";
import { fetchDashboard } from "./dashboardSaga";

function* saga() {
  yield takeEvery(requestDashboard, fetchDashboard)
}

export default saga;