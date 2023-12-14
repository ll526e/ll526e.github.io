import dayjs from 'dayjs';
import classnames from 'classnames';
import { App } from 'antd';

const useDay = dayjs
const useClassnames = classnames
const useMessage = () => App.useApp()

export {
  useDay,
  useClassnames,
  useMessage
}