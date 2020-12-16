
export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/hotelDB',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
}