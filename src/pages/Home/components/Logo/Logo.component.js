import {Content, CustomTooltip, IconLogo} from "asset/components/components";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";

export const Logo = ({fontSize = 2, children}) => {

    return (
        <Content align={'center'} height={100} justify={'space-around'} width={100}>
            <CustomTooltip title="هفته قبل" arrow>
                <BsArrowLeftCircle className={'arrow'}/>
            </CustomTooltip>
            <CustomTooltip title="غذا چی درست کنم ؟" arrow placement="right-start">
                <IconLogo fontSize={fontSize}>
                    {children}
                </IconLogo>
            </CustomTooltip>
            <CustomTooltip title="هفته بعد" arrow>
                <BsArrowRightCircle className={'arrow'}/>
            </CustomTooltip>
        </Content>
    )

}
