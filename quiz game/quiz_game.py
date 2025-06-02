import time

class Stopwatch:
    def __init__(self):
        self._start_time = None
        self._elapsed_time = 0

    def start(self):
        if self._start_time is not None:
            raise ValueError("Stopwatch is already running")
        self._start_time = time.perf_counter()

    def stop(self):
        if self._start_time is None:
            raise ValueError("Stopwatch is not running")
        self._elapsed_time += time.perf_counter() - self._start_time
        self._start_time = None

    def reset(self):
        self._start_time = None
        self._elapsed_time = 0

    def get_elapsed_time(self):
        if self._start_time is not None:
            return self._elapsed_time + (time.perf_counter() - self._start_time)
        return self._elapsed_time

    def is_running(self):
        return self._start_time is not None

if __name__ == '__main__':
    stopwatch = Stopwatch()

    input("Press Enter to start the stopwatch")
    stopwatch.start()

    input("Press Enter to stop the stopwatch")
    stopwatch.stop()

    print("Elapsed time:", stopwatch.get_elapsed_time(), "seconds")

    input("Press Enter to reset the stopwatch")
    stopwatch.reset()
    print("Stopwatch reset.")
