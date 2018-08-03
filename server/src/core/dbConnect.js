import mongoose from 'mongoose';

const uri = `${process.env.MONGODB_URL}${process.env.MONGODB_DATABASE}`;

(async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true });
    console.log(`Connected to: ${ uri }\n`);
  } 
  catch (error) {
    console.log('Error occurred when attempting to connect to database: ' + error);
    return false;
  }
})();

export default mongoose;