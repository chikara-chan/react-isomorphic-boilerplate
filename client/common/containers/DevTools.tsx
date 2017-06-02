import React from 'react'
const {createDevTools}=require('redux-devtools')
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
    <DockMonitor defaultPosition="right"
        defaultIsVisible={false}
        toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-w">
    <LogMonitor/>
    </DockMonitor>
)
