import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import secretKey from '../keys'
import UserInfo from '../database/models/userModel'

// const db = UserInfo



const options = {
    callbackURL: "/api/auth/google/redirect",
    clientID: secretKey.google.clientID,
    clientSecret: secretKey.google.clientSecret,
}



export default passport.use(new GoogleStrategy(options, async(accessToken, refreshToken,profile:any, done) => {
    //take call back functions
    console.log("connected to google data")
    // console.log('User profile:', profile);
    
    const googleData = {
        userName: profile.displayName,
        email: profile.emails[0].value,
        profilePicture: profile.photos[0].value

    }
    console.log(googleData)
    
    // UserInfo.create(googleData).then(() => {
    //         console.log("user created")
    // }).catch(() => {
    //     console.log("some thing wrong")
    // })


   
}))