import { HTMLProps } from "react";

import useGenerateId from "@/hooks/useGenerateId";

type Props = HTMLProps<HTMLInputElement>;

const SimpleFileInput = (props: Props) => {
    const { style, id, type, name = "upload-file", children, ...rest } = props;
    const uniqueId = useGenerateId();

    return (
        <div>
            <label htmlFor={uniqueId}>{children}</label>
            <input type="file" name={name} id={uniqueId} style={{ ...style, display: "none" }} {...rest} />
        </div>
    );
};

export default SimpleFileInput;
