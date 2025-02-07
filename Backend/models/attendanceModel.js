import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  employeeID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true }, // Store date as a string (YYYY-MM-DD)
  status: { type: String, enum: ['Present', 'Absent'], default: 'Absent' },
  clockIn: { type: String }, // Store time as a string (HH:MM:SS)
  clockOut: { type: String }, // Store time as a string (HH:MM:SS)
  totalTime: { type: String }, // Store total time as a string (e.g., "8.30 hours")
});

// Ensure each user can only have one attendance record per date
attendanceSchema.index({ employeeID: 1, date: 1 }, { unique: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
