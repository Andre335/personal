import React, { FunctionComponent, ReactElement } from 'react'
import { CardMedia, Card } from '@material-ui/core'
import me from '../images/me.jpg'
import { bio } from '../consts'

const Bio: FunctionComponent = (): ReactElement => (
    <div className="ma4">
        <h2>Bio</h2>
        <Card>
            <div className="flex">
                <div className="flex-column w-75 ml4 pa3 pb3">
                    <p>{bio}</p>
                </div>
                <div className="h5 w-25">
                    <CardMedia className="flex-column h-100 w-100" image={me} />
                </div>
            </div>
        </Card>
    </div>
)

export default Bio