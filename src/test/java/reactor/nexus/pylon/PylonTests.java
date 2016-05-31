/*
 * Copyright (c) 2011-2016 Pivotal Software Inc, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package reactor.nexus.pylon;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

import org.junit.Test;
import reactor.core.scheduler.Schedulers;
import reactor.core.subscriber.SubmissionEmitter;
import reactor.core.util.Exceptions;
import reactor.io.netty.nexus.Nexus;

/**
 * @author Stephane Maldini
 */
public class PylonTests {


	public static void main(String... args) throws Exception {
		Nexus nexus = Nexus.create();
		nexus.startAndAwait();

		Pylon.create().startAndAwait();

		final SubmissionEmitter<Object> s = nexus.streamCannon();
		Schedulers.timer()
		     .schedule(() -> {
			      if (!s.isCancelled()) {
				      s.submit(s);
			      }
			      else {
				      throw Exceptions.failWithCancel();
			      }
		      }, 200, TimeUnit.MILLISECONDS);

		CountDownLatch latch = new CountDownLatch(1);

		latch.await();
	}

	@Test
	public void simpleTest(){

	}

}
