import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty/specialty.router";
import { AuthRoutes } from "../module/auth/auth.routes";
import { UserRoutes } from "../module/user/user.route";
import { DoctorRoutes } from "../module/doctor/doctor.route";
import { AdminRoutes } from "../module/admin/admin.route";
import { scheduleRoutes } from "../module/schedule/schedule.route";
import { DoctorScheduleRoutes } from "../module/doctorSchedule/doctorSchedule.route";


const router = Router()
router.use("/auth", AuthRoutes)
router.use("/specialties", SpecialtyRoutes)
router.use("/users", UserRoutes)
router.use("/doctors", DoctorRoutes)
router.use("/admins", AdminRoutes)
router.use("/schedules", scheduleRoutes)
router.use("doctor-schedules", DoctorScheduleRoutes)
 router.use("/appointments", AppointmentRoutes)

export const IndexRoutes = router