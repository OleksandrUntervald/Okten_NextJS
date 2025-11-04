import {FC} from "react";

type ParamsPropsType = {
    params: {id: string}
}

const UserPage: FC<ParamsPropsType> = async ({params}) => {
     const {id} = await params

    return (
        <div>
            UserPage {id}
    </div>
    )
}
export default UserPage;