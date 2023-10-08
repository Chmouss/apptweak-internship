import { useSelector } from "react-redux";
import { userSelectors } from "../../containers/user/selectors";
import { Avatar, Grid, Typography } from "@mui/material";

const UserProfile: React.FC = () => {

    //get current user
    const me = useSelector(userSelectors.getMe);

    if (!me) {
        return <Grid>loading user ...</Grid>;
    }

    //display user infos
    return (
        <Grid style={{ textAlign: 'center', position:'relative' }}>
            <Avatar 
                src={me.images[0].url ?? ''}
                alt="profile-pic"
                sx={{ width: 80, height: 80, position:'absolute', top: 5 ,right: 60}}
            />
            <Typography variant="h3">
                welcome, you are logged in as
            </Typography>
            
            <Typography variant="h3"> {me.display_name} </Typography>
            <br/>
            <Typography> {me.email} </Typography>
            <br/>   
        </Grid>
    )
}

export default UserProfile;
