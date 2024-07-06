import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormData {
  [key: string]: string;
}

export default function TodoListAfter() {
  //register는 이전에 todo list에서 적었던 것을 적을 필요가 없음
  // register 안에는 , onchange, onblur(커서 밖으로 나감), ref, name (내가 입력해서 지정한) 이있음
  // watch는 const [todo, setTodo] = useState(); 이거 역활을 함 입력하면 값이 다 들어옴
  //handleSubmit 은 submit 동작시 원하는 함수에 연결 시켜준다
  // formState 는 해당 input 에 개별 상태 값을 알려준다
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  // console.log({ ...register("todo") });
  //watch 안에 input 값이 다 들어감 하나만 감지하는게 아님
  // console.log(watch());
  console.log(errors, "formstate");
  const onValid = (data: IFormData) => {
    if (data.password !== data.password1) {
      setError("password1", { message: "비번 다름" }, { shouldFocus: true });
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onValid)}>
        <div>
          {/* 옵션 안에 값을 입력하면 요건 충족을 못했을 경우, 자동으로 커서가 해당 input에 간다 */}
          {/* true 값이 아닌 메시지 입력하면 그 메시지를 담아감  */}
          <input
            {...register("email", {
              required: {
                value: true,
                message: "must write Email",
              },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                message: "네이버만 가능",
              },
            })}
            placeholder="Email"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input {...register("firstName", { minLength: 5 })} placeholder="First Name" />
        </div>
        <div>
          <input {...register("lastName")} placeholder="Last Name" />
        </div>
        <div>
          <input {...register("username")} placeholder="Username" />
        </div>
        <div>
          <input
            {...register("password", {
              required: "must write password",
              validate: {
                noNumber: (value) => (value.includes("123") ? "123 쓰지마" : true),
              },
            })}
            placeholder="Password"
          />
          <span>{errors.password?.message}</span>
        </div>
        <div>
          <input {...register("password1")} placeholder="Password1" />
          <span>{errors.password1?.message}</span>
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}
