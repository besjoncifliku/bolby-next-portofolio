import * as React from "react";
import styled from "styled-components";
import Image from 'next/image';

interface Props {
    src: string;
    state: number;
    tile: {
        width: number;
        height: number;
    };
    scale: number;
}

interface ContainerProps {
    width: number;
    height: number;
    scale: number;
}

const Container = styled.div<ContainerProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    overflow: hidden;
    transform: scale(${({ scale }) => `${scale}, ${scale}`});
    transform-origin: top left;
`;

export default class Tile extends React.Component<Props> {
    static defaultProps = {
        scale: 1
    };

    render() {
        const { src, tile, state, scale } = this.props;

        const left = tile.width * state;

        return (
            <Container width={tile.width} height={tile.height} scale={scale}>
                <Image src={src} alt={'Sprint Image'} />
            </Container>
        );
    }
}