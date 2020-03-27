import React from 'react';
import { G, Path } from 'react-native-svg';

export default {
    User: {
        svg: <G fill="none" fill-rule="evenodd">
        <Path fill="#FFF" d="M0 0H1440V810H0z" transform="translate(-946 -419)"/>
        <Path fill="#1A1A1A" fill-rule="nonzero" stroke="#1A1A1A" stroke-width=".3" d="M963.218 432.282c-1.035-1.034-2.267-1.8-3.61-2.264 1.439-.991 2.384-2.65 2.384-4.526 0-3.028-2.464-5.492-5.492-5.492s-5.492 2.464-5.492 5.492c0 1.876.945 3.535 2.385 4.526-1.344.464-2.576 1.23-3.61 2.264-1.795 1.795-2.783 4.18-2.783 6.718h1.484c0-4.42 3.596-8.016 8.016-8.016s8.016 3.596 8.016 8.016H966c0-2.538-.988-4.923-2.782-6.718zM956.5 429.5c-2.21 0-4.008-1.798-4.008-4.008s1.798-4.008 4.008-4.008 4.008 1.798 4.008 4.008-1.798 4.008-4.008 4.008z" transform="translate(-946 -419)"/></G>,
        viewBox: "0 0 21 21"
    },
    Security: {
        svg: <G fill="none" fill-rule="evenodd">
            <Path fill="#FFF" d="M0 0H1440V810H0z" transform="translate(-1052 -419)"/>
            <G fill="#1A1A1A" fill-rule="nonzero" stroke="#1A1A1A" stroke-width=".3">
                <Path d="M7 14c.552 0 1-.219 1-.488v-2.024c0-.27-.448-.488-1-.488s-1 .219-1 .488v2.024c0 .27.448.488 1 .488h0z" transform="translate(-1052 -419) translate(1053 420)"/>
                <Path d="M13.438 6.106H10.78V3.394C10.78 1.522 9.084 0 7 0 4.917 0 3.222 1.522 3.222 3.394v2.712H.56c-.31 0-.561.249-.561.556v7.12C0 16.658 2.363 19 5.267 19h3.466C11.637 19 14 16.659 14 13.781V6.662c0-.307-.252-.556-.562-.556zM4.344 3.394c0-1.258 1.191-2.28 2.656-2.28 1.464 0 2.656 1.022 2.656 2.28v2.712H4.344V3.394zm8.532 10.387c0 2.264-1.858 4.106-4.143 4.106H5.267c-2.285 0-4.144-1.842-4.144-4.106V7.22h11.753v6.562z" transform="translate(-1052 -419) translate(1053 420)"/>
            </G>
        </G>,
        viewBox: "0 0 16 21"
    }
}