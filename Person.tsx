import { MgtPerson } from '@microsoft/mgt';
import React from 'react';

const CustomPersonElement: React.FunctionComponent = () => {
    return <>
    Title
    <mgt-person
        show-name={true}
        ref={(element: MgtPerson) => {
            if (!element) {
                return;
            }
            element.personDetails = {
                displayName: 'Bill Gates',
                emailAddresses: [{ address: 'bill@microsoft.com' }],
            };
        }}
    >
    </mgt-person>
    </>;
};

export default CustomPersonElement;
