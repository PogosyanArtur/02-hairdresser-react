import React, { Component } from 'react';
import styles from "./Navbar.module.scss"
import logoImage from "../../../assets/images/logo-383x354.png"
import Icon from "../../icon/icon"


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      lists: [
        { name: "главная", link: "#" },
        { name: "услуги", link: "#service" },
        { name: "цены", link: "#price" },
        { name: "акции", link: "#" },
        { name: "контакты", link: "#" }
      ]
     }
  }
  render() {
    const lists = this.state.lists.map(item => (<a className={styles.Link} href={item.link}>{item.name}</a>)) 
    return ( 
      <section className={styles.Box}>
        <div className={styles.Container}>
          <a className={styles.Brand} href="#s"><img className={styles.BrandImage} src={logoImage} alt="logo" /></a>
          <button className={styles.Toggler} type="button"><Icon name="menu" color="#red" /></button>
        </div>
        <div className={styles.Nav}>
          {lists}
        </div>
      </section> 
    );
  }
}
 
export default NavBar;