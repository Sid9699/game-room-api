declare global {
  namespace express {
    export interface User {
      _id: mongoose.Types.ObjectId;
      email: string;
    }
  }
}
