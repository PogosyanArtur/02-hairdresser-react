import React, { Component } from "react";
import style from "./styles.module.scss"
import Card from "../Card"
import lists from "./ServiceData"
import HairStyling from "../ServiceContent/HairStyling"
import Makeup from "../ServiceContent/Makeup"
import Nail from "../ServiceContent/Nail"
import Cosmetology from "../ServiceContent/Cosmetology"
import Massage from "../ServiceContent/Massage"
import Solarium from "../ServiceContent/Solarium"

export default class extends Component {
  state = {
    showModal: false,
    activeModal: null
  }
  showModal = (title) => {
    this.setState({ showModal: true })
    this.setState({ activeModal: title })
  }
  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <section className={style.Box}>
        <div className={style.Content}>
          {lists.map(item => (
            <Card
              onClick={() => this.showModal(item.name)}
              cardClassName={style.Item}
              key={item.title}
              title={item.title}
              context={item.context}
              src={require(`../../assets/images/${item.src}.jpg`)}
              alt={item.alt}
            />
          ))}
        </div>
        {
          this.state.showModal ? (
            <>
              <div className={style.Modal} onClick={this.closeModal}>

              </div>
              <div className={style.ModalContainer}>
                <div className={style.XContainer}>
                  <div onClick={this.closeModal} className={style.X}><span>X</span></div>
                </div>
                <div className={style.ModalContentBox}>
                  <div className={style.ModalContent}>
                    {
                      this.state.activeModal === "hairdressing"
                        ? <HairStyling />
                        : this.state.activeModal === "makeup"
                          ? <Makeup />
                          : this.state.activeModal === "nail"
                            ? <Nail />
                            : this.state.activeModal === "cosmetology"
                              ? <Cosmetology />
                              : this.state.activeModal === "massage"
                                ? <Massage />
                                : this.state.activeModal === "solarium"
                                  ? <Solarium/>
                                  : null
                    }
                  </div>
                </div>
              </div>
            </>
          ) : null
        }


      </section>
    )
  }
}
