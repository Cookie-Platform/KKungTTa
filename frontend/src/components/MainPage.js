import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import lang from '../lang/ko_KR.json'; // lang 파일 불러오기

function MainPage() {
  const [user, setUser] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogin = () => {
    setUser({ nickname: '쿸으다스' });
  };

  const handleLogout = () => {
    setIsDialogOpen(false);
    setUser(null);
    window.location.reload();
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-between">
      {/* 상단바 */}
      <header className="w-full h-16 bg-white text-black flex items-center justify-between px-6 shadow-md">
        <h1 className="text-2xl font-bold">쿵따</h1>
        <button
          className="
            bg-green-500 text-white font-semibold py-2 px-4 
            rounded shadow 
            hover:bg-green-600 
            active:bg-green-700 
            transition
          "
        >
          로그인
        </button>
      </header>

      {/* 메인 컨텐츠 */}
      <div className="flex flex-col items-end justify-center h-[calc(100%-4rem)] px-10 space-y-6">
        {/* 게임 시작 버튼 (오른쪽 배치) */}
        <button
          className="
            bg-green-500 text-white font-bold py-4 px-8 text-2xl 
            rounded-md shadow-md 
            transform transition 
            duration-200 ease-in-out 
            hover:scale-105 hover:shadow-lg 
            active:scale-95 active:shadow-sm
            w-[200px]
          "
        >
          게임 시작
        </button>
        
        {/* 로그인 버튼 및 닉네임 박스 (게임 시작 버튼 바로 아래에 배치) */}
        <div className="flex flex-col items-end w-full space-y-4">
          {user ? (
            <div className="bg-white p-4 border rounded shadow-md w-[200px]">
              <span 
                className="text-lg font-medium text-gray-800 cursor-pointer"
                onClick={() => setIsDialogOpen(true)}
              >
                {user.nickname}
              </span>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="
                bg-white text-green-600 font-semibold py-4 px-8 
                border border-green-500 rounded w-[200px] 
                hover:bg-green-100 transition
              "
            >
              로그인
            </button>
          )}
        </div>
      </div>

      {/* 로그아웃 다이얼로그 */}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-80">
            <Dialog.Title>{lang.logoutConfirmation}</Dialog.Title>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleLogout}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
              >
                {lang.confirm}
              </button>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition"
              >
                {lang.cancel}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default MainPage;
