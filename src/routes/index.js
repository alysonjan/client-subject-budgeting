import React from 'react'

import RouteComponent from './Routes'

import { withTheme } from '../themes/Theme';

export const RouteProvider = () => {
    return (
        <RouteComponent />
    )
}

export default withTheme(RouteProvider);