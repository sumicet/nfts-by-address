import type { IconProps } from '@chakra-ui/icon';
import Icon from '@chakra-ui/icon';

export function Verified(props: IconProps) {
    return (
        <Icon width="100%" height="100%" viewBox="0 0 512 512" fill="none" {...props}>
            <g fill="none" fillRule="evenodd">
                <path
                    d="M256 472.153L176.892 512l-41.725-81.129-86.275-16.654 11.596-91.422L0 256l60.488-66.795-11.596-91.422 86.275-16.654L176.892 0 256 39.847 335.108 0l41.725 81.129 86.275 16.654-11.596 91.422L512 256l-60.488 66.795 11.596 91.422-86.275 16.654L335.108 512z"
                    fill="#4285f4"
                />
                <path
                    d="M211.824 284.5L171 243.678l-36 36 40.824 40.824-.063.062 36 36 .063-.062.062.062 36-36-.062-.062L376.324 192l-36-36z"
                    fill="#fff"
                />
            </g>
        </Icon>
    );
}
