import { Switch, Route } from "react-router-dom";
import Slick from '../Library/Slick';

const ComponentRouter = () => {
    return (
        <>
            <Switch>
                <Route path="/report-writing" component={Slick} exact />
            </Switch>
        </>
    )
}

export default ComponentRouter;