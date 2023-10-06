import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            hello
            <Outlet></Outlet>
        </div>
    );
};

export default Root;