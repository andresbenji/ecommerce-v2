import{Container, Row, Col} from "react-bootstrap"
import React from 'react'
import styles from '../assets/styles/custom.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
    return (
    <footer className={styles.bgColor}>
      <Container>
        <Row>
            <Col className="text-center py-3">
                <p>Midnight Club Auto Parts &copy;{currentYear}</p>
            </Col>
        </Row>
        </Container>
    </footer>
  )
}

export default Footer
