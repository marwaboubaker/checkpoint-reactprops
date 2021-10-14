import React from 'react'

const Profile = (props) => {
    return (
        <div>
            <ul class="list-group">
  <li class="list-group-item">{props.name}</li>
  <li class="list-group-item">{props.bio}</li>
  <li class="list-group-item">{props.contry}</li>
</ul>
        </div>
    )
}

export default Profile
