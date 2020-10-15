import React, {useState} from "react";
import vkBridge from "@vkontakte/vk-bridge";
import {Panel, View, ConfigProvider, PanelHeader, Group, CellButton} from "@vkontakte/vkui";

const MainPage = () => {
    const [state, setState] = useState({
        activePanel: 'panel1',
    })


    const goBack = () => {
        const history = [...state.history];
        history.pop();
        const activePanel = history[history.length - 1];
        if (activePanel === 'main') {
            vkBridge.send('VKWebAppDisableSwipeBack');
            setState({history, activePanel});
        }
    }

    // const goForward = (activePanel) => {
    //     const history = [...state.history];
    //     history.push(activePanel);
    //     if (state.activePanel === 'main') {
    //         vkBridge.send('VKWebAppEnableSwipeBack');
    //     }
    //     setState({history, activePanel});
    // }


    return (
        <View activePanel={state.activePanel}>
            <Panel id="panel1">
                <PanelHeader>Panel 1</PanelHeader>
                <Group>
                    <CellButton onClick={ () => setState({ activePanel: 'panel2' }) }>
                        Go to panel 2
                    </CellButton>
                </Group>
            </Panel>
            <Panel id="panel2">
                <PanelHeader>Panel 2</PanelHeader>
                <Group>
                    <CellButton onClick={ () => setState({ activePanel: 'panel3' }) }>
                        Go to panel 3
                    </CellButton>
                </Group>
            </Panel>
            <Panel id="panel3">
                <PanelHeader>Panel 3</PanelHeader>
                <Group>
                    <CellButton onClick={ () => setState({ activePanel: 'panel1' }) }>
                        Back to panel 1
                    </CellButton>
                </Group>
            </Panel>
        </View>
    )

}
export default MainPage