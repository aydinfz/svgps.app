import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Dialog from "./Dialog";
import Icon from "./Icon";

const CollectionAction = ({ onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center rounded-md p-1 text-sm font-medium text-white hover:bg-neutral-700 hover:bg-opacity-30">
            <Icon
              icon="dots-three-vertical"
              className="text-neutral-600"
              size={14}
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-neutral-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onEdit}
                    className={`${
                      active
                        ? "bg-violet-500 text-neutral-200"
                        : " text-neutral-200"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Icon icon="pencil" size={16} className="mr-2" />
                    Rename
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setIsOpen(true)}
                    className={`${
                      active
                        ? "bg-violet-500 text-neutral-200"
                        : " text-neutral-200"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Icon icon="trash" size={16} className="mr-2" />
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Dialog
        className="!w-80 text-center"
        isOpen={isOpen}
        // @ts-ignore
        setIsOpen={setIsOpen}
        title="Are you sure?"
        confirmText="Delete"
        onConfirm={onDelete}
      />
    </>
  );
};

export default CollectionAction;
