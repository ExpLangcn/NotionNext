import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import LayoutBase from './LayoutBase'

export const LayoutCategoryIndex = (props) => {
  const { categories } = props
  const { locale } = useGlobal()
  return <LayoutBase {...props}>
    <div className=' p-10 w-full'>
      <div className='dark:text-gray-200 mb-5'>
        <i className='mr-4 fas fa-th' />{locale.COMMON.CATEGORY}:
      </div>
      <div id='category-list' className='duration-200 flex flex-wrap'>
        {categories && categories.map(category => {
          return <Link key={category.name} href={`/category/${category.name}`} passHref>
            <div
              className={'hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100'}>
              <i className='mr-4 fas fa-folder' />{category.name}({category.count})
            </div>
          </Link>
        })}
      </div>
    </div>
  </LayoutBase>
}
