'use client'
import React from "react";
import styles from './styles.module.css'

export default function Error () {
    return (
        <div className={styles.errorWrapper } >
          <h1>Error <span style={{fontSize:'60px'}}>|</span> Something went wrong!</h1>
        </div>
      );
}