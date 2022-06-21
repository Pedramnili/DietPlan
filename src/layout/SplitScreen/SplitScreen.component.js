import {Container, Pane} from "asset/components/styleComponents";

export const SplitScreen =
    ({
         alignContainer = 'center',
         children,
         fDirectionContainer,
         heightContainer = 100,
         justifyContainer,
         partOneWeight = 1,
         partTwoWeight = 1,
         partOneWidth = 100,
     }) => {

    const [partOne, partTwo] = children

    return (
        <Container align={alignContainer}
                   height={heightContainer}
                   justify={justifyContainer}
                   fDirection={fDirectionContainer}
        >
            <Pane weight={partOneWeight} width={partOneWidth}>
                {partOne}
            </Pane>
            <Pane weight={partTwoWeight}>
                {partTwo}
            </Pane>
        </Container>
    )

}