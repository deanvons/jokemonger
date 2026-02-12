import { useSelector } from "react-redux"


export default function UserInfo() {

    const user = useSelector((state)=>state.user)
  return (
    <>
      <h3>User : {user.username}</h3>
    </>
  )
}
