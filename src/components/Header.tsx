import React, { FunctionComponent, ReactElement } from "react"
import { Typography, IconButton } from "@material-ui/core"
import { GitHub, LinkedIn } from "@material-ui/icons"

const Header: FunctionComponent = (): ReactElement => (
    <div className="bg-blue white">
        <div className="flex justify-between">
            <div className="flex-column mr4">
                <Typography variant="h6">
                    <p className="b ma2">André Gonçalves</p>
                </Typography>
            </div>
            <div className="flex-column justify-between">
                <IconButton href="https://www.linkedin.com/in/angoncal/" color="inherit"> 
                    <LinkedIn /> 
                </IconButton>
                <IconButton href="https://github.com/Andre335" color="inherit"> 
                    <GitHub /> 
                </IconButton>
            </div>
        </div>
    </div>
)


export default Header