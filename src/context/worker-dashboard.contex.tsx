import {Service} from "@/types/app.type";
import {createSignal, createContext, useContext, Setter, ParentProps, Accessor} from "solid-js";

export interface WorkerTaskContext {
  selected: Accessor<Service | undefined>
  setSelected: Setter<Service | undefined>
}

const WorkerTaskContext = createContext<WorkerTaskContext>();

export function WorkerTaskProvider (props: ParentProps) {
  const [selected, setSelected] = createSignal<Service>()

  return (
    <WorkerTaskContext.Provider value={{
      selected,
      setSelected,
    }}>
      {props.children}
    </WorkerTaskContext.Provider>
  );
}

export function useWorkerTask () {return useContext(WorkerTaskContext)}