import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from '../../Redux/requestMethods'

export default function WidgetSm() {

  const [users , setUsers] = useState([]);

  useEffect(()=> {
    const getUsers = async()=> {
      try {
        const res = await userRequest.get('/users');
        setUsers(res.data)        
      } catch (err) {
        console.log(err)
      }
    }
    getUsers();
  },[])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user)=> (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.img || "https://media.istockphoto.com/vectors/missing-image-of-a-person-placeholder-vector-id1288129985?k=20&m=1288129985&s=612x612&w=0&h=OHfZHfKj0oqIDMl5f_oRqH13MHiB63nUmySYILbWbjE="}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
