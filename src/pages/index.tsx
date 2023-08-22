import { useState } from 'react';
import CustomToggle from '../components/CustomToggle';
import CustomListbox from '@/components/CustomListbox';
import CustomDisclosure from '@/components/CustomDisclosure';
import { FaPlus } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';
import { ImAttachment } from 'react-icons/im';
import { BsEmojiSmileFill, BsFillTrashFill } from 'react-icons/bs';
import Modal from '@/components/Modal';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CustomTabs } from '@/components/CustomTabs';
import { CustomDropDownMenu } from '@/components/CustomDropDownMenu';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

const data = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

const tabsData = [
  {
    name: 'Account1',
    count: 2,
    panel: <p>This is Account1</p>,
  },
  {
    name: 'Account2',

    panel: <p>This is Account2</p>,
  },
  {
    name: 'Password',
    count: 5,
    panel: <p>This is Account3</p>,
  },
];
const menuData = [
  {
    label: 'My Account',
    data: [
      {
        logo: <User />,
        name: 'Profile',
        shortcut: '⇧⌘P',
      },
      {
        logo: <CreditCard />,
        name: 'Billing',
        shortcut: '⌘B',
      },
      {
        logo: <Settings />,
        name: 'Settings ',
        shortcut: '⌘S',
      },
      {
        logo: <Keyboard />,
        name: 'Keyboard shortcuts',
        shortcut: '⌘K',
      },
    ],
  },
  {
    label: 'My Profile',
    data: [
      {
        logo: <User />,
        name: 'Address',
        shortcut: '⇧⌘P',
      },
      {
        logo: <CreditCard />,
        name: 'ProfilePicture',
        shortcut: '⌘B',
      },
      {
        logo: <Settings />,
        name: 'Phone Number ',
        shortcut: '⌘S',
      },
      {
        logo: <Keyboard />,
        name: 'Keyboard shortcuts',
        
      },
    ],
  },
];

export default function Home() {
  const [checked, setChecked] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleAction = () => {
    openModal();
  };

  return (
    <div className="w-10/12 mx-auto flex flex-col gap-y-6">
      <CustomToggle checked={checked} handler={handleChecked} />

      <CustomListbox data={data} />

      <div className="flex flex-col gap-y-3">
        <CustomDisclosure
          title="Appearance"
          buttonClass=" flex justify-between"
          titleClass="text-bigger font-semibold leading-6 text-darkCustom"
        >
          <div className="flex justify-between my-5">
            <div className="flex gap-x-2 items-center">
              <p className="font-medium text-normal leading-6 text-darkCustom">
                Widget Logo
              </p>
              <img
                src="https://devs.fluent.sh/images/h_logo.png"
                alt="widget_logo"
                className="w-8 h-8"
              />
            </div>

            <div className="flex gap-x-2 items-center">
              <p className="font-medium text-normal leading-6 text-darkCustom">
                Widget Theme
              </p>
              <div className="h-6 w-6 rounded-full bg-blueCustom text-white flex justify-center items-center">
                <AiOutlineCheck />
              </div>
            </div>

            <div className="flex gap-x-2 items-center">
              <div className="h-6 w-6 rounded-full bg-grayCustom text-white flex justify-center items-center">
                <FaPlus />
              </div>
              <p className="font-normal text-normal leading-6 text-darkCustom">
                Add Custom Color
              </p>
            </div>

            <div className="flex gap-x-2 items-center">
              <p className="font-medium text-normal leading-6 text-darkCustom">
                Widget Position
              </p>
              <div className="flex gap-x-2 items-center">
                <input
                  type="radio"
                  name="position"
                  id=""
                  value="Right"
                  defaultChecked
                />{' '}
                <p>Right</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <input type="radio" name="position" id="" value="Left" />
                <p>Left</p>
              </div>
            </div>
          </div>
        </CustomDisclosure>

        <CustomDisclosure
          title="Settings"
          buttonClass=" flex justify-between"
          titleClass="text-bigger font-semibold leading-6 text-darkCustom"
        >
          <div className="my-5">
            <div className="w-full">
              <p className="py-2 px-5 text-grayCustom font-medium text-small leading-4">
                Online Status Label
              </p>
              <input
                type="text"
                className="w-1/2 px-5 py-2 placeholder:text-grayCustom font-medium text-normal leading-6 focus:outline-none rounded border border-lineGrayCustom"
                placeholder="type your label here"
              />
            </div>

            <div className="my-5">
              <div className="my-3 flex justify-between items-center">
                <p className="py-2 px-5 text-grayCustom font-medium text-small leading-4">
                  Display Chat Widget when Offline
                </p>
                <CustomToggle checked={checked} handler={handleChecked} />
              </div>
              <textarea
                rows={5}
                className="w-full border border-lineGrayCustom rounded px-5 py-2 placeholder:text-grayCustom font-medium text-normal leading-6 focus:outline-none"
                placeholder="Type your offline message here ..."
              />
            </div>

            <div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" />
                <p className="font-medium text-normal text-grayCustom/80 leading-6">
                  Display File Picker on widget
                </p>
                <ImAttachment className="text-grayCustom" />
              </div>

              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" />
                <p className="font-medium text-normal text-grayCustom/80 leading-6">
                  Allow users to end conversation from widget
                </p>
              </div>

              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" />
                <p className="font-medium text-normal text-grayCustom/80 leading-6">
                  Display Emoji Picker on widget
                </p>
                <BsEmojiSmileFill className="text-grayCustom" />
              </div>
            </div>
          </div>
        </CustomDisclosure>

        <CustomDisclosure
          title="Pre-Chat Survey"
          buttonClass=" flex justify-between"
          titleClass="text-bigger font-semibold leading-6 text-darkCustom"
        >
          <div className="my-5 space-y-4">
            <div className="flex gap-x-3 items-center">
              <p className="font-medium text-normal leading-4 text-darkCustom">
                Enable Pre-Chat Survey
              </p>
              <CustomToggle checked={checked} handler={handleChecked} />
            </div>
            <div>
              <p className="py-2 px-5 text-grayCustom font-medium text-small leading-4">
                Online Status Label
              </p>
              <input
                type="text"
                className="w-1/2 px-5 py-2 placeholder:text-grayCustom font-medium text-normal leading-6 focus:outline-none rounded border border-lineGrayCustom"
                placeholder="type your label here"
              />
            </div>
            <p className="my-2 font-normal text-normal leading-6 text-grayCustom">
              Pre-Chat Survey Helps you Customer to identify their issue before
              chat starts.
            </p>

            <div className="">
              <p className="font-medium text-normal text-darkCustom leading-6 my-3">
                Survey Fields
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-x-2 items-center">
                  <input type="checkbox" />
                  <p className="font-medium text-normal leading-6 text-grayCustom">
                    Email
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <input type="checkbox" />
                  <p className="font-medium text-normal leading-6 text-grayCustom">
                    Phone Number
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <input type="checkbox" />
                  <p className="font-medium text-normal leading-6 text-grayCustom">
                    Website URL
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <input type="checkbox" />
                  <p className="font-medium text-normal leading-6 text-grayCustom">
                    Name
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <input type="checkbox" />
                  <p className="font-medium text-normal leading-6 text-grayCustom">
                    Complaint Field
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <input type="checkbox" />
                  <p className="font-medium text-normal leading-6 text-grayCustom">
                    Address Field
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CustomDisclosure>
      </div>

      <button
        className={`w-8 h-8 rounded-full bg-redCustom/10 flex justify-center items-center `}
        onClick={() => handleAction()}
      >
        <BsFillTrashFill color="#F3451E" />
      </button>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>

          <Button type="submit">Save changes</Button>
        </div>
      </Modal>
      <CustomTabs
        data={tabsData}
        tabTrigeerBgColor="bg-blue-300"
        tabListBgColor="bg-red-600"
        textSize="text-xl"
      ></CustomTabs>
      <CustomDropDownMenu
        data={menuData}
        buttonValue={'Open'}
        menuBg={'bg-blue-400'}
        menuWidth={'w-56'}
        menuItemFocus={'focus:bg-pink-200'}
      ></CustomDropDownMenu>
    </div>
  );
}
