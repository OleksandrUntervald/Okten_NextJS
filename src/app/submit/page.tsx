import React, {FC} from 'react';

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>
}

const SubmitPage:FC<Props> = async ({searchParams}) => {
    const awaitedSP = await searchParams;


    return (
        <div>
            this is page after submitting {awaitedSP.name}
        </div>
    );
};

export default SubmitPage;