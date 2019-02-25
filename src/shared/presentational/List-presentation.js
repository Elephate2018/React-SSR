import React from 'react';
import { NavLink } from 'react-router-dom'

const ListComponent = (props) => (
  <article>
      <div>
        <NavLink to={props.path + props.messages.title.replace(/ /g, "_")}><span>- {props.messages.title}</span></NavLink>
        <p>{props.messages.description}</p>
      </div>
  </article>
)


export default ListComponent;
