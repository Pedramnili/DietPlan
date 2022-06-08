import {Container, Pane} from "asset/components/components";

export const SplitScreen =
    ({
         alignContainer = 'center',
         children,
         fDirectionContainer,
         heightContainer = 100,
         justifyContainer,
         partOneW = 1,
         partTwoW = 1,
         widthContainer = 100,
     }) => {

    const [partOne, partTwo] = children

    return (
        <Container align={alignContainer}
                   height={heightContainer}
                   justify={justifyContainer}
                   fDirection={fDirectionContainer}
        >
            <Pane weight={partOneW} width={widthContainer}>
                {partOne}
            </Pane>
            <Pane weight={partTwoW}>
                {partTwo}
            </Pane>
        </Container>
    )

}