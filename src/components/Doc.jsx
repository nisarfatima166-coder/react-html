export default function Doc() {
    return (
        <>
        
         <div>
      <ul>
        <li><strong>A</strong></li>
        <li><strong>B</strong>
            <strong><ol>
                <li><strong>B1</strong></li>
                <li><strong>B2</strong>
                    <ul>
                        <li><strong>B2a</strong>
                            <ul>
                                <li><strong>B2aa</strong></li>
                                <li><strong>B2ab</strong></li>
                            </ul>
                        </li>
                        <li><strong>B2b</strong></li>
                        <li><strong>B2c</strong></li>
                    </ul>
                </li>
                <li><strong>B3</strong>
                    <ol>
                        <li><strong>B31</strong></li>
                        <li><strong>B32</strong></li>
                    </ol>
                </li>
            </ol></strong>
        </li>
        <li><strong>C</strong></li>
        </ul>
    </div>
        
        </>
    )
}