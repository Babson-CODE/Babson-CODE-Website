import React from 'react'
import {
    Segment,
    Container
 } from "semantic-ui-react"
import ResponsiveContainer from '../../../codesite/src/components/Shared/ResponsiveContainer'

export default function Layout({ children }){
    return(
        <ResponsiveContainer>
            {children}
        </ResponsiveContainer>
    )
}