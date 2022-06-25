import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {STYLE_MODAL_S} from "config/variables";
import Typography from '@mui/material/Typography';
import {useDispatch , useSelector} from "react-redux";

export const ModalSuggestion = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const handleClose = () => {dispatch({type: 'OPEN_MODAL_SUGGESTION', payload: false})};

    return (
        <div>
            <Modal open={state.modalSuggestion} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
                   BackdropProps={{timeout: 500}}>
                <Fade in={state.modalSuggestion}>
                    <Box sx={STYLE_MODAL_S}>
                        {
                            state?.foodSuggestion.length === 0 ?
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                غذایی یافت نشد
                            </Typography> :
                            state?.foodSuggestion.map((item) => {
                                return (
                                    <>
                                        <div key={item.name}>
                                            {item.name}
                                        </div>
                                        <hr/>
                                    </>
                                )
                            })
                        }
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}