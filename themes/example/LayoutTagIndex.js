import Link from 'next/link'
import LayoutBase from './LayoutBase'

export const LayoutTagIndex = (props) => {
  const { tags } = props
  return <LayoutBase {...props}>
        <div className='p-10'>
            <div id='tags-list' className='duration-200 flex flex-wrap'>
                {tags.map(tag => {
                  return <div key={tag.name} className='p-2'>
                        <Link key={tag} href={`/tag/${encodeURIComponent(tag.name)}`} passHref>
                            <a className={`cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200
            mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white text-gray-600 hover:shadow-xl dark:border-gray-400 notion-${tag.color}_background dark:bg-gray-800`}>
                                <div className='font-light dark:text-gray-400'><i className='mr-1 fas fa-tag' /> {tag.name + (tag.count ? `(${tag.count})` : '')} </div>
                            </a>
                        </Link>
                    </div>
                })}
            </div>
        </div>   </LayoutBase>
}
