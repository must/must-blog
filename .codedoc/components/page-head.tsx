export interface PageHeadOptions {
  lead?: string;
  color?: 'black' | 'white';
  shadow?: string;
}


export function PageHead(options: PageHeadOptions, renderer: any, content: any) {
  return <h1>
    <span style={`color: ${options.color || 'white'}; 
      text-shadow: ${options.shadow || '0 2px 6px #000000C8'}; 
      font-size: 48px`
    }>
    {options.lead? <span style="font-size: 24px;  margin-bottom: -48px; display: block">{options.lead}&nbsp;</span>: ''}
    {content}
    </span>
  </h1>
}