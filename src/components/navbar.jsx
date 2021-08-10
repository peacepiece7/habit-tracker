import React, { memo } from 'react';

const Navbar = memo(props => {
  console.log("navbar component")
  return (
    <div className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
    </div>
  );
},(prev,next) => {
  console.log("navbar : prev & next is same ref? ", prev === next)
})

export default Navbar;
