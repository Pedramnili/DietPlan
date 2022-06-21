import {ArrowDown , ArrowLeft, ArrowRight} from "pages/Home/components";
import {Content, CustomTooltip, IconLogo} from "asset/components/styleComponents";
import {useDispatch} from "react-redux";

export const Logo = ({children, width = 100}) => {

    const dispatch = useDispatch();
    const handleOpen = () => dispatch({type: 'OPEN_MODAL', payload: true});

    return (
        <Content align={'center'} height={100} justify={'space-around'} width={100}>
            <ArrowLeft/>
            <Content fDirection={'column'} align={'center'}>
                <CustomTooltip title="غذا چی درست کنم ؟" arrow placement="right-start">
                    <IconLogo fontSize={3} width={width} onClick={handleOpen}>
                        {children}
                    </IconLogo>
                </CustomTooltip>
                <ArrowDown/>
            </Content>
            <ArrowRight/>
        </Content>
    )

}
